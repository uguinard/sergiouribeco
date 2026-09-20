import os
import yaml
from pathlib import Path


def load_index_yaml(index_path):
    """Load and parse index.yaml file"""
    with open(index_path, "r", encoding="utf-8") as f:
        return yaml.safe_load(f)


def save_index_yaml(index_path, data):
    """Save data to index.yaml with proper formatting"""
    with open(index_path, "w", encoding="utf-8") as f:
        yaml.dump(
            data,
            f,
            default_flow_style=False,
            indent=2,
            allow_unicode=True,
            sort_keys=False,
        )


def get_media_filenames(media_path):
    """Get all valid image filenames from media directory"""
    if not media_path.exists():
        return []
    return [
        f.name
        for f in media_path.iterdir()
        if f.suffix in [".webp", ".jpg", ".png", ".jpeg"]
    ]


def update_index_yaml_photos():
    # Configuración de rutas
    VAULT_PATH = Path(".")  # Ejecutar en la raíz de tus contenidos
    MEDIA_FOLDER = "./media"
    INDEX_FILE = "index.yaml"

    # Load index.yaml
    index_path = VAULT_PATH / INDEX_FILE
    if not index_path.exists():
        print(f"El archivo {INDEX_FILE} no existe.")
        return

    index_data = load_index_yaml(index_path)

    # Get all valid image filenames from media directory
    media_path = VAULT_PATH / MEDIA_FOLDER
    valid_media_files = get_media_filenames(media_path)

    # Process photos section
    if "photos" in index_data:
        existing_photos = index_data["photos"]

        # Clean up: remove photos that don't exist in media directory
        cleaned_photos = []
        for photo in existing_photos:
            if isinstance(photo, dict) and "src" in photo:
                src = photo["src"]
                if src.startswith("./media/"):
                    filename = src[8:]  # Remove "./media/" prefix
                    if filename in valid_media_files:
                        cleaned_photos.append(photo)
                    else:
                        print(f"🗑️  Eliminando foto no encontrada: {src}")
                else:
                    # If src doesn't follow expected format, keep it
                    cleaned_photos.append(photo)
            else:
                # If photo is not a dict or doesn't have src, keep it
                cleaned_photos.append(photo)

        # Add new photos that don't exist yet
        existing_srcs = set()
        for photo in cleaned_photos:
            if isinstance(photo, dict) and "src" in photo:
                existing_srcs.add(photo["src"])

        new_photo_list = []
        for img in valid_media_files:
            src_path = f"./media/{img}"
            if src_path not in existing_srcs:
                new_photo_list.append({"src": src_path})

        # Combine cleaned existing photos with new ones
        updated_photos = cleaned_photos[:]
        if new_photo_list:
            updated_photos.extend(new_photo_list)
            print(f"✅ Añadiendo {len(new_photo_list)} nuevas fotos")

        # Update photos in index data
        index_data["photos"] = updated_photos

        # Save updated index.yaml
        save_index_yaml(index_path, index_data)
        print(
            f"📁 Archivo {INDEX_FILE} actualizado con {len(updated_photos)} fotos totales"
        )
    else:
        print("⚠️  No se encontró sección 'photos' en index.yaml")


if __name__ == "__main__":
    update_index_yaml_photos()

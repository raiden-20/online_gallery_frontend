const fileSize = 2097152

export const setPhoto = (photoFile: FileList, setPhotoUrl: (photoUrl: string) => void,
                         setPhotoFile: (photoFile: File) => void) => {
    if (photoFile !== null) {
        const file = photoFile[0];
        if (photoFile[0].size <= fileSize) {
            const reader = new FileReader();

            reader.onload = (event) => {
                if (event.target !== null && event.target.result !== null) {
                    setPhotoUrl(event.target.result.toString());
                }

            };
            reader.readAsDataURL(file);
            setPhotoFile(photoFile[0])
        } else {
            // todo файл слишком большой
        }
    }
}
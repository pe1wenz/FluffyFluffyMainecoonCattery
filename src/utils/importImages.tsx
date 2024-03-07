export const importImages = (path: string, count: number) => {
    return Promise.all(
        Array.from({ length: count }, (_, index) => {
            const imageNumber = index + 1;
            const imagePath = `${path}/${imageNumber}.jpeg`;
            return import(`../../assets/images/${imagePath}`).then((image) => ({
                original: image.default,
                thumbnail: image.default,
                comment: `${imageNumber}weeks`,
            }));
        })
    );
};

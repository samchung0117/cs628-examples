// Section05-Ex01-utils.js

export function getImageUrl(person, size = 's') {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
}
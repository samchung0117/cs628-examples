// Section02-Ex03-Gallery.js
// Default export - Gallery
// Named export - Profile

export function Profile() {
    return (
        <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
        />
    );
}
  
export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}
import MobileNavbarClient from "./Navbar.client";

export default async function MobileNavbar() {
  // Fallback values (Replace with your auth logic later)
  const user = {
    username: "Guest",
    imageUrl: "/default-avatar.png", // Use a default profile image
  };

  return <MobileNavbarClient username={user.username} userImage={user.imageUrl} />;
}

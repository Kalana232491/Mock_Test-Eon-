export async function GetUsers() {
  const response = await fetch('https://randomuser.me/api/?results=10');
  if (!response.ok) {
    throw new Error('Failed to get users');
  }
  return response.json();
}
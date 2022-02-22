export default async function getRandomRecipes<T>(): Promise<T> {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const res = await fetch(
    "https://api.spoonacular.com/recipes/random?apiKey=ec394ecdd77a4d50883b44a839c24563&number=10",
    {
      method: "GET",
      headers,
    }
  );

  const json = await (res.json() as Promise<T>);
  return json;
}

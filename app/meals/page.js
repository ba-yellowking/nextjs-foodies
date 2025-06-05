import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>Meals Page</h1>
      <Link href="/meals/meal-1"><p>This is Meal 1</p></Link>
      <Link href="/meals/meal-2"><p>This is Meal 2</p></Link>
    </main>
  )
}
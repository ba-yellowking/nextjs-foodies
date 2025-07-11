import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/app/components/meals/meals-grid";
import {getMeals} from "@/lib/meals";
import {Suspense} from "react";

export const metadata = {
  title: 'All meals',
  description: 'Browse the delicious meals shared by our community.',
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals}/>
}

export default async function MealsPage() {

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. it is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">
            Share Your Favourite Recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}
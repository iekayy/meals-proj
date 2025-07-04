import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals-output/meals-grid';
import {getMeals} from '@/lib/meals';
import { Suspense } from 'react';

export const metadata = {
    title: 'All Meals',
    description: 'Browse through meals shared by our community',
  };


async function Meals(){
     const meals = await getMeals();

     return <MealsGrid meals={meals}/>



}


export default  function MealsPage(){
    
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created <span className={classes.highlight}>by you</span>
                </h1>
                <p>Choose and cook your favorite recipe here. Very easy and fun</p>
                <p className={classes.cta}>
                    <Link href = "meals/share">
                    Share your fav recipe
                    </Link>
                </p>

            </header>

            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
                    <Meals/>
                </Suspense>

            </main>
        </>
    )
}
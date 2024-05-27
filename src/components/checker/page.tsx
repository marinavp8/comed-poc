"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { z } from "zod"


function Checker() {
    const [submittedData, setSubmittedData] = useState<z.infer<typeof formSchema> | null>(null);
    let count = 0
    const formSchema = z.object({
        ingredients: z.string().min(2, {
            message: "Introduce at least 2 characters.",
        }),
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            ingredients: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        setSubmittedData(values);
    }



    function createIngredientsArray(): string[] {
        const ingredients = [
            "Acetylated Lanolin Alcohol",
            "Algin",
            "Almond Oil",
            "Anhydrous Lanolin",
            "Arachidic Acid",
            "Ascorbyl Palmitate",
            "Avobenzone",
            "Azulene",
            "Beeswax",
            "Benzaldehyde",
            "Benzoic Acid",
            "Beta Carotene",
            "BHA",
            "Bubussa Oil",
            "Butyl Stearate",
            "Butylated Hydroxyanisole (BHA)",
            "Cajeput Oil",
            "Calendula",
            "Camphor",
            "Capric Acid",
            "Carbomer 940",
            "Carnuba Wax",
            "Carotene",
            "Carrageenan",
            "Castor Oil",
            "Ceteareth-20",
            "Cetearyl Alcohol",
            "Cetyl Acetate",
            "Cetyl Alcohol",
            "Chaulmoogra Oil",
            "Cocoa Butter",
            "Coconut Butter",
            "Coconut Oil",
            "Colloidal Sulfur",
            "Collagen",
            "Corn Oil",
            "Cotton Seed Oil",
            "D & C Red Pigments",
            "Decyl Oleate",
            "Dioctyl Succinate",
            "Disodium Monooleamido",
            "Emulsifying Wax NF",
            "Ethoxylated Lanolin",
            "Ethylhexyl Palmitate",
            "Evening Primrose Oil",
            "Fluorans",
            "Glyceryl-3-Diisostearate",
            "Hexadecyl Alcohol",
            "Hyaluronic acid (some molecule weights)",
            "Hydrogenated Castor Oil",
            "Hydrogenated Vegetable Oil",
            "Hydroxypropylcellulose",
            "Indigoids",
            "Isocetyl Alcohol",
            "Isodecyl Oleate",
            "Isopropyl Isosterate",
            "Isopropyl Lanolate",
            "Isopropyl Linoleate",
            "Isopropyl Myristate",
            "Isopropyl Neopentanoate",
            "Isopropyl Palmitate",
            "Isostearyl Isostearate",
            "Isostearyl Neopentanoate",
            "Laneth 10",
            "Lanolin Acid",
            "Lanolin Alcohol",
            "Lanolin Oil",
            "Lanolin Wax",
            "Laureth 4 and 23",
            "Menthyl Anthranilate",
            "Methoxycinnamate",
            "Mink Oil",
            "Monoazoanoline",
            "Myristic Acid",
            "Myristyl Lactate",
            "Octyl Palmitate",
            "Octyl Stearate",
            "Oleth-10",
            "Oleth-3",
            "Oleyl Alcohol",
            "Oxybenzone",
            "Palmitic Acid",
            "Peach Kernel Oil",
            "Peanut Oil",
            "PEG 100 Distearate",
            "PEG 150 Distearate",
            "PEG 16 Lanolin",
            "PEG 200 Dilaurate",
            "PEG 2-Sulfosuccinate",
            "PEG 8 Stearate",
            "Pentaerythritol Tetra Isostearate",
            "PG Caprylate/Caprate",
            "PG Dicaprylate/Caprate",
            "PG Dipelargonate",
            "PG Monostearate",
            "Polyethylene Glycol (PEG 400)",
            "Polyethylene Glycol 300",
            "Polyglyceryl-3-Diisostearate",
            "Potassium Chloride",
            "PPG 2 Myristyl Propionate",
            "PPG-5-Ceteth-10 Phosphate",
            "Propylene Glycol Monostearate",
            "Pumpkin Seed Oil",
            "Red Algae",
            "Sandalwood Seed Oil",
            "Sesame Oil",
            "Shark Liver Oil",
            "Solulan 1",
            "Solulan 16",
            "Sorbitan Oleate",
            "Soybean Oil",
            "Steareth 10",
            "Steareth 2",
            "Steareth 20",
            "Stearyl Heptanoate",
            "Sulfated Castor Oil",
            "Sulfated Jojoba Oil",
            "Synthetic Dyes, (D&C Red #S 3, 4, 6, 7, 9, 17, 19, 21, 27, 230, 33, 36, 40)",
            "Triethanolamine",
            "Vitamin A Palmitate",
            "Wheat Germ Glyceride/Oil",
            "Xanthenes",
            "Xylene",
            "Sweet Almond Oil",
            "Flax seed Oil",
            "Linseed Oil",
            "Evening Primrose Oil",
            "Hydrogenated Castor Oil",
            "Mink Oil",
            "Peach Kernel Oil",
            "Peanut Oil",
            "Pumpkin Seed Oil",
            "Sandalwood Seed Oil",
            "Sesame Oil",
            "Shark Liver Oil",
            "Soybean Oil",
            "Sulfated Castor Oil",
            "Sulfated Jojoba Oil",
            "Wheat Germ Glyceride/Oil"
        ];

        return ingredients.map(ingredient => ingredient.toLowerCase());
    }

    const ingredientsArray = createIngredientsArray();

    function splitIngredients(ingredientsString: string): string[] {
        let ingredientsList = ingredientsString.split(", ");
        return ingredientsList;
    }

    ;
    let result = splitIngredients(submittedData == null ? "" : submittedData.ingredients);
    function highlightIngredients(
        result: string[],
        ingredientsToCheck: string[]
    ): JSX.Element[] {
        const ingredientsToCheckLower = ingredientsToCheck.map(ingredient => ingredient.toLowerCase());

        return result.map((ingredient, index) => {
            const ingredientLower = ingredient.toLowerCase();
            let element: JSX.Element;

            if (ingredientsToCheckLower.includes(ingredientLower)) {
                count++;
                element = <span key={index} className="text-red-500">{ingredient}</span>;
            } else {
                element = <span key={index}>{ingredient}</span>;
            }
            return element;
        }).reduce<JSX.Element[]>((prev, curr, index) => {
            if (index === 0) {
                return [curr];
            } else {
                return [...prev, <span key={`comma-${index}`}>{" , "}</span>, curr];
            }
        }, []);
    }

    let highlightedResult = highlightIngredients(result, ingredientsArray);



    return (
        <>
            {/* <div className="bg-white py-16 sm:py-24">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-white px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
                        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-black sm:text-4xl">
                            Check ingredients                        </h2>
                        <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-black">
                            No more acne breackouts                        </p>
                        <div>


                        </div> */}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto mt-10 flex flex-col sm:flex-row max-w-md gap-x-4">
                    <FormField
                        control={form.control}
                        name="ingredients"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="ingredients" className="sr-only">Product ingredients</FormLabel>
                                <FormControl>
                                    <Input
                                        id="ingredients"
                                        placeholder="Copy and paste the product ingredients."
                                        {...field}
                                        className="min-w-0 w-full sm:w-96 rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <button
                        type="submit"
                        className="mt-4 sm:mt-0 flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Check ✨
                    </button>
                </form>
            </Form>
            {
                submittedData && (
                    <>

                        <div className="mt-6 ml-10 text-sm font-medium text-gray-900">{count} ingredients found, not good for your skin babe.</div>
                        <div
                            className="text-sm font-medium mt-4 text-gray-500 ml-10"

                        >
                            <div className="space-y-1">{highlightedResult}</div>
                        </div>
                    </>
                )
            }
            {/* </div>
                </div >
            </div > */}
        </>

    )
}

export default Checker
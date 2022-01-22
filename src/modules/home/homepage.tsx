/* eslint-disable react/no-multi-comp */
import useSWR from "swr";

// import { ArrowLeftIcon } from "../ui/icons/arrow-left";

function ChildComponent() {
	const { data, error, loading } = usePlanets();

	console.log("CHILD ", data, error);

	if (loading) return <h1>LOADING...</h1>;

	return (
		<div>
			<h5>Hey this is child component</h5>
			<p>Number of planets : {data?.count}</p>
		</div>
	);
}

function usePlanets() {
	const { data, error, isValidating, mutate } = useSWR<unknown[]>(`https://swapi.dev/api/planets/?page=${1}`);

	return {
		data,
		error,
		loading: (!data && !error) || isValidating,
		mutate,
	};
}

export const Homepage = () => {
	// const { data, error } = useSWR<StarWarsPlanets[]>(`https://swapi.dev/api/planets/?page=${1}`, fetch);
	const { data, error, mutate } = usePlanets();

	console.log(data, error);

	return (
		<section className="py-16">
			<article className="prose lg:prose-xl">
				<h1>Garlic bread with cheese: What the science tells us</h1>
				{/* <p>
					For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with
					the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for
					Halloween.
				</p>
				<p>
					But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up
					around the country.
				</p> */}
				<div className="mb-4">
					<h2>Parent component: {data?.count}</h2>
					<button className="bg-gray-600 p-4 text-white" onClick={() => mutate()}>
						Mutate
					</button>
				</div>

				<div className="bg-brand">
					<ChildComponent />
				</div>
			</article>
			{/* <Link to="test">
				<div className="border border-transparent flex font-semibold py-4 pr-6 transition-colors text-green-600 items-center group hover:cursor-pointer hover:text-green-700 focus:border-teal-500">
					Go to not found page
					<div className="h-5 ml-2 transform transition-transform w-5 translate-x-0 group-hover:translate-x-2">
						<ArrowLeftIcon classNames="transform rotate-180" />
					</div>
				</div>
			</Link> */}
		</section>
	);
};

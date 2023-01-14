/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const poops = await fetch("/api/poop");
    return {
        data: []
    }
}
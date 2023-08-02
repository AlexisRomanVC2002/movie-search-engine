export function handleSort(movies){

    return [...movies].sort( (a, b) => a.title.localeCompare(b.title));

}

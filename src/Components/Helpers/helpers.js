export function sortingRacers(arrayOfRacers, clickedDistance, group) {
  const groupSort = arrayOfRacers.filter((word) => {
    return (
      word.dviratis === clickedDistance &&
      word.kategorija === group &&
      word.laikas !== undefined
    );
  });
  const uniqueParticipants = [
    ...groupSort.reduce((accumulator, current) => {
      if (!accumulator.some((x) => x.numeris === current.numeris)) {
        accumulator.push(current);
      }
      return accumulator;
    }, []),
  ];
  return uniqueParticipants;
}

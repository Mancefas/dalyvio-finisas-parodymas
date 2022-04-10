export function sortingRacers(arrayOfRacers, cickedDistance, group) {
  const groupSort = arrayOfRacers.filter((word) => {
    return (
      word.dviratis === cickedDistance &&
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

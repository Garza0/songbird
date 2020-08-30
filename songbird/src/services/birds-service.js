import birdsData from './birds';

export default class BirdsService {

	getBirdsForRound = (round) => {
		return birdsData[round];
	};


}

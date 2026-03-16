import { historyBattlesData } from './history-battles.data';
import { historyFreedomData } from './history-freedom.data';
import { cultureDanceData } from './culture-dance-music.data';
import { geographyNationalParksData } from './geography-national-parks.data';
import { geographyRiversData } from './geography-rivers-dams.data';
import { geographyStatesData } from './geography-states-capitals.data';
import { polityConstitutionData } from './polity-constitution.data';
import { polityArticlesData } from './polity-articles.data';
import { scienceBiologyData } from './science-biology.data';
import { sciencePhysicsData } from './science-physics-inventions.data';
import { scienceSpaceData } from './science-space-missions.data';
import { businessBrandsData } from './business-brands-taglines.data';
import { businessFoundersData } from './business-founders-hq.data';

export const allStaticGKFlashcards = [
    ...historyBattlesData.flashcards,
    ...historyFreedomData.flashcards,
    ...cultureDanceData.flashcards,
    ...geographyNationalParksData.flashcards,
    ...geographyRiversData.flashcards,
    ...geographyStatesData.flashcards,
    ...polityConstitutionData.flashcards,
    ...polityArticlesData.flashcards,
    ...scienceBiologyData.flashcards,
    ...sciencePhysicsData.flashcards,
    ...scienceSpaceData.flashcards,
    ...businessBrandsData.flashcards,
    ...businessFoundersData.flashcards
];

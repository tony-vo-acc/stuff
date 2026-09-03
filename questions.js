const ALL_QUESTIONS = [

  // ============================
  // MODULE 0: Intro to Environmental Science
  // ============================

  {
    id: 1,
    chapter: 0,
    topic: "Intro to Environmental Science",
    question: "What is the best definition of \"the environment\"?",
    options: [
      "a) Only the natural, non-human parts of the world",
      "b) The sum of all conditions surrounding us that influence life",
      "c) A social movement to protect natural resources",
      "d) The study of pollution and its effects on humans"
    ],
    correct_answer: "b) The sum of all conditions surrounding us that influence life",
    explanation: "The environment is defined as the sum of all conditions surrounding us that influence life, made up of both living (biotic) and nonliving (abiotic) components."
  },

  {
    id: 2,
    chapter: 0,
    topic: "Intro to Environmental Science",
    question: "A student protests the removal of a local park to build new homes. What is this an example of?",
    options: [
      "a) Environmental science",
      "b) Environmentalism",
      "c) The scientific method",
      "d) Environmental studies"
    ],
    correct_answer: "b) Environmentalism",
    explanation: "Environmentalism is a social movement that seeks to protect the environment through activities like lobbying, activism, and protest, as opposed to environmental science, which is objective research."
  },

  {
    id: 3,
    chapter: 0,
    topic: "Intro to Environmental Science",
    question: "A scientist counts the population of a native woodpecker species before a nature park is developed into housing. What is this an example of?",
    options: [
      "a) Environmentalism",
      "b) Environmental science",
      "c) Environmental activism",
      "d) A natural experiment"
    ],
    correct_answer: "b) Environmental science",
    explanation: "Objective research and data collection, such as counting a population before a change occurs, is the practice of environmental science rather than environmentalism."
  },

  {
    id: 4,
    chapter: 0,
    topic: "Intro to Environmental Science",
    question: "How does environmental studies differ from environmental science?",
    options: [
      "a) Environmental studies is a narrower subset of environmental science",
      "b) Environmental studies only covers scientific data, not policy",
      "c) Environmental studies is the broader field, including policy, economics, literature, and ethics",
      "d) There is no meaningful difference between the two"
    ],
    correct_answer: "c) Environmental studies is the broader field, including policy, economics, literature, and ethics",
    explanation: "Environmental science is a subset of the broader field of environmental studies, which also incorporates policy, economics, literature, and ethics."
  },

  {
    id: 5,
    chapter: 0,
    topic: "Intro to Environmental Science",
    question: "Which of the following is NOT one of the four \"Big Ideas\" in AP Environmental Science?",
    options: [
      "a) Energy transfer",
      "b) Interactions between Earth's systems",
      "c) Economic growth and development",
      "d) Sustainability"
    ],
    correct_answer: "c) Economic growth and development",
    explanation: "The four Big Ideas are energy transfer, interactions between Earth's systems, interactions between species and the environment, and sustainability. Economic growth is not one of the four."
  },

  {
    id: 6,
    chapter: 0,
    topic: "Intro to Environmental Science",
    question: "Which Big Idea is considered the unifying theme woven throughout the entire AP Environmental Science course?",
    options: [
      "a) Energy transfer",
      "b) Sustainability",
      "c) Species interactions",
      "d) Scientific inquiry"
    ],
    correct_answer: "b) Sustainability",
    explanation: "Sustainability -- using Earth's resources in a way that doesn't jeopardize future generations' ability to do the same -- is considered the unifying theme of the course."
  },

  {
    id: 7,
    chapter: 0,
    topic: "Intro to Environmental Science",
    question: "In the scientific method, what typically comes immediately after an observation?",
    options: [
      "a) A theory",
      "b) A hypothesis",
      "c) A law",
      "d) Peer review"
    ],
    correct_answer: "b) A hypothesis",
    explanation: "The scientific method begins with observation, which leads to forming a hypothesis -- a testable conjecture about how something works, often based on prior knowledge."
  },

  {
    id: 8,
    chapter: 0,
    topic: "Intro to Environmental Science",
    question: "In an experiment testing whether fertilizer amount affects plant height, which is the independent variable?",
    options: [
      "a) Plant height",
      "b) The amount of fertilizer applied",
      "c) The type of plant",
      "d) The number of plants tested"
    ],
    correct_answer: "b) The amount of fertilizer applied",
    explanation: "The independent variable is the factor being manipulated by the experimenter (fertilizer amount), while the dependent variable (plant height) is what's being measured as a result."
  },

  {
    id: 9,
    chapter: 0,
    topic: "Intro to Environmental Science",
    question: "What is the main purpose of a control group in an experiment?",
    options: [
      "a) To predict what the results should look like",
      "b) To provide a baseline for comparison against the experimental group",
      "c) To increase the sample size",
      "d) To eliminate the need for replication"
    ],
    correct_answer: "b) To provide a baseline for comparison against the experimental group",
    explanation: "A control group does not receive the treatment being tested. It serves as a baseline so researchers can determine whether the treatment actually caused an effect."
  },

  {
    id: 10,
    chapter: 0,
    topic: "Intro to Environmental Science",
    question: "After a wildfire burns part of a forest, scientists compare the burned area to a similar, undisturbed forest nearby. What is this an example of?",
    options: [
      "a) A controlled laboratory experiment",
      "b) A natural experiment",
      "c) Deductive reasoning",
      "d) Peer review"
    ],
    correct_answer: "b) A natural experiment",
    explanation: "Because the event (the wildfire) could not be controlled by researchers, comparing the affected area to a similar undisturbed system is a natural experiment."
  },

  {
    id: 11,
    chapter: 0,
    topic: "Intro to Environmental Science",
    question: "Two students measure the boiling point of water five times. Their five results are very close to each other, but all are noticeably below the true boiling point due to a broken thermometer. Their measurements are:",
    options: [
      "a) Accurate but not precise",
      "b) Precise but not accurate",
      "c) Both accurate and precise",
      "d) Neither accurate nor precise"
    ],
    correct_answer: "b) Precise but not accurate",
    explanation: "Precision refers to how close repeated measurements are to each other, while accuracy refers to how close a measurement is to the true value. Consistently wrong results are precise but not accurate."
  },

  {
    id: 12,
    chapter: 0,
    topic: "Intro to Environmental Science",
    question: "What does \"uncertainty\" refer to in scientific measurement?",
    options: [
      "a) The researcher's confidence that the hypothesis is correct",
      "b) The estimate of how much a measured or calculated value differs from the true value",
      "c) The number of times an experiment is repeated",
      "d) Whether a result has been peer reviewed"
    ],
    correct_answer: "b) The estimate of how much a measured or calculated value differs from the true value",
    explanation: "Uncertainty is the estimated difference between a measured or calculated value and the true value being measured."
  },

  {
    id: 13,
    chapter: 0,
    topic: "Intro to Environmental Science",
    question: "A researcher observes that maple, oak, and birch trees all lose their leaves in autumn, and concludes that deciduous trees in general lose their leaves in autumn. This is an example of:",
    options: [
      "a) Deductive reasoning",
      "b) Inductive reasoning",
      "c) Peer review",
      "d) Formulating a law"
    ],
    correct_answer: "b) Inductive reasoning",
    explanation: "Inductive reasoning moves from specific observations (individual tree species) to a general conclusion (deciduous trees in general), which is the opposite of deductive reasoning."
  },

  {
    id: 14,
    chapter: 0,
    topic: "Intro to Environmental Science",
    question: "Knowing that \"all birds have feathers,\" and that a robin is a bird, a student concludes that a robin has feathers. This is an example of:",
    options: [
      "a) Deductive reasoning",
      "b) Inductive reasoning",
      "c) A natural experiment",
      "d) A control group"
    ],
    correct_answer: "a) Deductive reasoning",
    explanation: "Deductive reasoning applies a general statement (all birds have feathers) to a specific case (a robin) to reach a conclusion, moving from general to specific."
  },

  {
    id: 15,
    chapter: 0,
    topic: "Intro to Environmental Science",
    question: "A hypothesis that has been repeatedly tested, confirmed, and widely accepted by the scientific community is called a:",
    options: [
      "a) Law",
      "b) Theory",
      "c) Control group",
      "d) Natural experiment"
    ],
    correct_answer: "b) Theory",
    explanation: "Once a hypothesis is repeatedly tested and confirmed, it can become a theory -- a widely accepted, well-supported explanation, not merely an unproven guess."
  },

  {
    id: 16,
    chapter: 0,
    topic: "Intro to Environmental Science",
    question: "What distinguishes a scientific law from a theory?",
    options: [
      "a) A law is simply a theory that has been proven, making it a higher level of certainty",
      "b) A law has no known exceptions, while a theory is a well-supported explanation",
      "c) A law is untested, while a theory has been peer reviewed",
      "d) There is no real difference between a law and a theory"
    ],
    correct_answer: "b) A law has no known exceptions, while a theory is a well-supported explanation",
    explanation: "A law describes a pattern with no known exceptions (like the laws of thermodynamics), while a theory is a well-tested explanation. A law is not simply an \"upgraded\" theory -- they are different categories."
  },

  {
    id: 17,
    chapter: 0,
    topic: "Intro to Environmental Science",
    question: "A power plant converts fuel into electricity, but a large portion of the input energy is lost as heat and noise rather than usable electricity. This best illustrates:",
    options: [
      "a) The first law of thermodynamics",
      "b) The second law of thermodynamics",
      "c) The competitive exclusion principle",
      "d) Resource partitioning"
    ],
    correct_answer: "b) The second law of thermodynamics",
    explanation: "The second law of thermodynamics states that when energy is transformed, it loses some of its ability to do useful work, often dissipating as heat -- exactly what happens at a power plant."
  },

  // ============================
  // MODULE 1: Species Interactions & Ecosystem Ecology
  // ============================

  {
    id: 18,
    chapter: 1,
    topic: "Species Interactions & Ecosystem Ecology",
    question: "What is community ecology the study of?",
    options: [
      "a) The interactions among species",
      "b) The layers of the atmosphere",
      "c) Human social communities",
      "d) The scientific method"
    ],
    correct_answer: "a) The interactions among species",
    explanation: "Community ecology is defined as the study of interactions among species, including consumption, competition, and symbiosis."
  },

  {
    id: 19,
    chapter: 1,
    topic: "Species Interactions & Ecosystem Ecology",
    question: "What kinds of factors determine ecosystem boundaries?",
    options: [
      "a) Only human political borders",
      "b) Abiotic and biotic factors, such as temperature, salinity, and soil",
      "c) Only the presence of predators",
      "d) The size of the biosphere"
    ],
    correct_answer: "b) Abiotic and biotic factors, such as temperature, salinity, and soil",
    explanation: "Ecosystem boundaries are determined by a combination of abiotic (nonliving) and biotic (living) factors, such as temperature, salinity, and soil type."
  },

  {
    id: 20,
    chapter: 1,
    topic: "Species Interactions & Ecosystem Ecology",
    question: "Even though ecosystems are studied as separate units, what larger system are all of Earth's ecosystems part of?",
    options: [
      "a) The lithosphere",
      "b) The biosphere",
      "c) The stratosphere",
      "d) The hydrosphere only"
    ],
    correct_answer: "b) The biosphere",
    explanation: "While dividing ecosystems is useful for study, all ecosystems on Earth are interconnected within the biosphere."
  },

  {
    id: 21,
    chapter: 1,
    topic: "Species Interactions & Ecosystem Ecology",
    question: "What does the competitive exclusion principle state?",
    options: [
      "a) Two species competing for the exact same resource cannot coexist indefinitely",
      "b) Predators always outcompete their prey",
      "c) Species never compete for the same resources",
      "d) Mutualistic species always exclude competitors"
    ],
    correct_answer: "a) Two species competing for the exact same resource cannot coexist indefinitely",
    explanation: "The competitive exclusion principle, informed by Gause's experiments, holds that two species competing directly for the same limited resource cannot coexist long-term."
  },

  {
    id: 22,
    chapter: 1,
    topic: "Species Interactions & Ecosystem Ecology",
    question: "Darwin's finches evolving different beak shapes to eat different types of food is an example of:",
    options: [
      "a) Predation",
      "b) Resource partitioning through morphology",
      "c) Commensalism",
      "d) Parasitism"
    ],
    correct_answer: "b) Resource partitioning through morphology",
    explanation: "Resource partitioning occurs when species evolve to divide a resource to avoid direct competition, either through behavior or, as with Darwin's finches, through morphological changes like beak shape."
  },

  {
    id: 23,
    chapter: 1,
    topic: "Species Interactions & Ecosystem Ecology",
    question: "A wasp lays its eggs inside a live aphid; the eggs hatch and slowly consume the aphid from the inside. This relationship is best described as:",
    options: [
      "a) Predation",
      "b) Parasitoidism",
      "c) Mutualism",
      "d) Commensalism"
    ],
    correct_answer: "b) Parasitoidism",
    explanation: "A parasitoid consumes its host by laying eggs inside it; the larvae then hatch and slowly consume the host from the inside, as with parasitic wasps and aphids."
  },

  {
    id: 24,
    chapter: 1,
    topic: "Species Interactions & Ecosystem Ecology",
    question: "A poison dart frog's bright coloration and toxic skin are examples of:",
    options: [
      "a) Mimicry",
      "b) A morphological defense against predation",
      "c) Commensalism",
      "d) Resource partitioning"
    ],
    correct_answer: "b) A morphological defense against predation",
    explanation: "Prey species evolve morphological defenses -- like camouflage, spines, or chemical defenses such as a poison dart frog's toxins -- to avoid being eaten."
  },

  {
    id: 25,
    chapter: 1,
    topic: "Species Interactions & Ecosystem Ecology",
    question: "A tick feeds on a small amount of a dog's blood over time without killing the dog. This is an example of:",
    options: [
      "a) Predation",
      "b) Mutualism",
      "c) Parasitism",
      "d) Commensalism"
    ],
    correct_answer: "c) Parasitism",
    explanation: "Parasitism occurs when one organism lives on or in another, consuming a small fraction of the host in order to keep it alive, unlike predation which kills the prey."
  },

  {
    id: 26,
    chapter: 1,
    topic: "Species Interactions & Ecosystem Ecology",
    question: "Which of the following is classified as a pathogen?",
    options: [
      "a) A honeybee",
      "b) A parasitic fungus that causes disease",
      "c) A pollinating bat",
      "d) Algae living inside coral tissue"
    ],
    correct_answer: "b) A parasitic fungus that causes disease",
    explanation: "Pathogens are organisms that cause disease, including viruses, bacteria, fungi, protists, and helminths (worm-like parasites)."
  },

  {
    id: 27,
    chapter: 1,
    topic: "Species Interactions & Ecosystem Ecology",
    question: "What can happen if herbivore populations increase without any predation to control them?",
    options: [
      "a) Ecosystems can collapse from overconsumption of plants",
      "b) Plant biomass will always increase as a result",
      "c) Competitive exclusion is guaranteed",
      "d) The herbivores will automatically become predators"
    ],
    correct_answer: "a) Ecosystems can collapse from overconsumption of plants",
    explanation: "Unchecked herbivore populations can overconsume plant life to the point of ecosystem collapse, which is why predation can be an important control on herbivore numbers."
  },

  {
    id: 28,
    chapter: 1,
    topic: "Species Interactions & Ecosystem Ecology",
    question: "Algae living inside coral tissue photosynthesize and provide the coral with sugars, while the coral provides the algae shelter and nutrients. This relationship is:",
    options: [
      "a) Commensalism",
      "b) Mutualism",
      "c) Parasitism",
      "d) Predation"
    ],
    correct_answer: "b) Mutualism",
    explanation: "Mutualism is an interaction where both species benefit, as in the case of coral and their symbiotic algae, or plants and their pollinators."
  },

  {
    id: 29,
    chapter: 1,
    topic: "Species Interactions & Ecosystem Ecology",
    question: "A fish species uses a coral reef for shelter from predators. The fish benefits, but the coral reef is unaffected either way. This relationship is:",
    options: [
      "a) Mutualism",
      "b) Commensalism",
      "c) Parasitism",
      "d) Competitive exclusion"
    ],
    correct_answer: "b) Commensalism",
    explanation: "Commensalism describes an interaction where one species benefits and the other is unaffected -- here, the fish benefits from shelter while the coral sees no effect."
  },

  {
    id: 30,
    chapter: 1,
    topic: "Species Interactions & Ecosystem Ecology",
    question: "Red foxes, which were introduced to Australia and are not native there, are best described as:",
    options: [
      "a) A native species",
      "b) An exotic/alien species",
      "c) A parasitoid",
      "d) A keystone species"
    ],
    correct_answer: "b) An exotic/alien species",
    explanation: "Exotic or alien species are those found outside their historical range, often introduced through human activity, such as red foxes being introduced to Australia."
  },

  {
    id: 31,
    chapter: 1,
    topic: "Species Interactions & Ecosystem Ecology",
    question: "What makes an exotic species specifically \"invasive\"?",
    options: [
      "a) It is simply any species that has been moved by humans",
      "b) It spreads quickly and causes harm to native ecosystems",
      "c) It only affects ecosystems on other continents",
      "d) It always leads to mutualistic relationships with natives"
    ],
    correct_answer: "b) It spreads quickly and causes harm to native ecosystems",
    explanation: "An invasive species is an exotic species that spreads rapidly and causes harm to the native ecosystem it has entered."
  },

  // ============================
  // MODULE 2: Terrestrial Biomes
  // ============================

  {
    id: 32,
    chapter: 2,
    topic: "Terrestrial Biomes",
    question: "What is a biome?",
    options: [
      "a) The specific location where one particular species lives",
      "b) A region of the world where particular plants and animals can be found",
      "c) A single ecosystem with no boundaries",
      "d) A synonym for \"habitat\""
    ],
    correct_answer: "b) A region of the world where particular plants and animals can be found",
    explanation: "A biome is a large region defined by the particular plants and animals found there, distinct from a habitat, which is where one specific species lives."
  },

  {
    id: 33,
    chapter: 2,
    topic: "Terrestrial Biomes",
    question: "Terrestrial biomes are primarily defined by which two factors, along with dominant plant growth forms?",
    options: [
      "a) Ocean depth and salinity",
      "b) Annual temperature and precipitation",
      "c) Human population density",
      "d) Soil color and elevation only"
    ],
    correct_answer: "b) Annual temperature and precipitation",
    explanation: "Terrestrial biomes are defined by the dominant plant growth forms present, along with annual temperature and precipitation patterns."
  },

  {
    id: 34,
    chapter: 2,
    topic: "Terrestrial Biomes",
    question: "What is the purpose of a climate diagram?",
    options: [
      "a) To show a single day's weather forecast",
      "b) To visualize monthly patterns of temperature and precipitation to help identify likely biome plants and animals",
      "c) To track ocean currents",
      "d) To measure soil pH"
    ],
    correct_answer: "b) To visualize monthly patterns of temperature and precipitation to help identify likely biome plants and animals",
    explanation: "A climate diagram plots the months of the year against temperature and precipitation on one graph, helping predict the plants and animals likely to be found in a biome."
  },

  {
    id: 35,
    chapter: 2,
    topic: "Terrestrial Biomes",
    question: "Terrestrial biomes are generally divided into which three broad groups?",
    options: [
      "a) Tundra/taiga, temperate, and tropical",
      "b) Freshwater, marine, and coastal",
      "c) Urban, rural, and wilderness",
      "d) Photic, aphotic, and benthic"
    ],
    correct_answer: "a) Tundra/taiga, temperate, and tropical",
    explanation: "The nine terrestrial biomes fall into three general groups: tundra and taiga biomes, temperate biomes, and tropical biomes."
  },

  {
    id: 36,
    chapter: 2,
    topic: "Terrestrial Biomes",
    question: "A cold, treeless biome with low-growing vegetation, defined by a permanently frozen layer of soil, is the:",
    options: [
      "a) Taiga",
      "b) Tundra",
      "c) Temperate grassland",
      "d) Shrubland"
    ],
    correct_answer: "b) Tundra",
    explanation: "The tundra is a cold, treeless biome with low-growing vegetation, defined by permafrost -- a frozen soil layer that prevents drainage."
  },

  {
    id: 37,
    chapter: 2,
    topic: "Terrestrial Biomes",
    question: "A forest biome made primarily of coniferous evergreen trees that tolerate cold winters and short growing seasons is also known as a boreal forest, or the:",
    options: [
      "a) Taiga",
      "b) Savanna",
      "c) Temperate rainforest",
      "d) Hot desert"
    ],
    correct_answer: "a) Taiga",
    explanation: "The taiga, sometimes called a boreal forest, is dominated by coniferous evergreen trees adapted to cold winters and short growing seasons."
  },

  {
    id: 38,
    chapter: 2,
    topic: "Terrestrial Biomes",
    question: "Which biome is a coastal region typified by moderate temperatures and high precipitation?",
    options: [
      "a) Temperate rainforest",
      "b) Hot desert",
      "c) Temperate grassland",
      "d) Savanna"
    ],
    correct_answer: "a) Temperate rainforest",
    explanation: "The temperate rainforest is a coastal biome characterized by moderate temperatures and high levels of precipitation."
  },

  {
    id: 39,
    chapter: 2,
    topic: "Terrestrial Biomes",
    question: "A biome with warm summers, cold winters, and over 1 meter (39 inches) of annual precipitation is the:",
    options: [
      "a) Temperate seasonal forest",
      "b) Tropical rainforest",
      "c) Hot desert",
      "d) Tundra"
    ],
    correct_answer: "a) Temperate seasonal forest",
    explanation: "The temperate seasonal forest has warm summers and cold winters with more than 1 meter (39 inches) of annual precipitation."
  },

  {
    id: 40,
    chapter: 2,
    topic: "Terrestrial Biomes",
    question: "Which biome, also known as woodland, is characterized by hot, dry summers and mild, rainy winters?",
    options: [
      "a) Shrubland",
      "b) Taiga",
      "c) Tropical rainforest",
      "d) Savanna"
    ],
    correct_answer: "a) Shrubland",
    explanation: "Shrubland, also known as woodland, is characterized by hot, dry summers and mild, rainy winters."
  },

  {
    id: 41,
    chapter: 2,
    topic: "Terrestrial Biomes",
    question: "The temperate grassland biome, sometimes referred to as a cold desert, is characterized by:",
    options: [
      "a) Cold, harsh winters and hot, dry summers",
      "b) Warm temperatures with distinct wet and dry seasons",
      "c) Little seasonal temperature variation and high precipitation",
      "d) Permafrost year-round"
    ],
    correct_answer: "a) Cold, harsh winters and hot, dry summers",
    explanation: "The temperate grassland, also called a cold desert, typically has cold, harsh winters paired with hot, dry summers."
  },

  {
    id: 42,
    chapter: 2,
    topic: "Terrestrial Biomes",
    question: "A warm, wet biome found between 20°N and 20°S of the equator, with little seasonal temperature variation, high precipitation, and typically poor soils, is the:",
    options: [
      "a) Savanna",
      "b) Tropical rainforest",
      "c) Temperate rainforest",
      "d) Taiga"
    ],
    correct_answer: "b) Tropical rainforest",
    explanation: "Tropical rainforests occur between 20°N and 20°S of the equator, and are warm and wet with little seasonal temperature variation, high precipitation, and typically poor soils."
  },

  {
    id: 43,
    chapter: 2,
    topic: "Terrestrial Biomes",
    question: "Which biome, also known as a tropical seasonal forest, has warm temperatures and distinct wet and dry seasons?",
    options: [
      "a) Savanna",
      "b) Tundra",
      "c) Temperate grassland",
      "d) Shrubland"
    ],
    correct_answer: "a) Savanna",
    explanation: "The savanna, also known as a tropical seasonal forest, is known for warm temperatures and distinct wet and dry seasons."
  },

  {
    id: 44,
    chapter: 2,
    topic: "Terrestrial Biomes",
    question: "Hot desert biomes, located at roughly 30°N and 30°S, are best characterized by:",
    options: [
      "a) Hot temperatures, extremely dry conditions, and sparse vegetation",
      "b) Cold winters and permafrost",
      "c) High precipitation and dense forest cover",
      "d) Moderate temperatures with coastal fog"
    ],
    correct_answer: "a) Hot temperatures, extremely dry conditions, and sparse vegetation",
    explanation: "Hot deserts, located at roughly 30°N and 30°S, are characterized by hot temperatures, extremely dry conditions, and sparse vegetation."
  },

  {
    id: 45,
    chapter: 2,
    topic: "Terrestrial Biomes",
    question: "What is a major driver of changing terrestrial biome boundaries over time?",
    options: [
      "a) Boundaries never change once established",
      "b) Species and climate change, including human-driven impacts",
      "c) Only the presence of predators",
      "d) Ocean salinity levels"
    ],
    correct_answer: "b) Species and climate change, including human-driven impacts",
    explanation: "Terrestrial biomes are affected by both species and climate. Human advancement and climate change are major drivers of which biomes expand and which shrink."
  },

  // ============================
  // MODULE 3: Aquatic Biomes
  // ============================

  {
    id: 46,
    chapter: 3,
    topic: "Aquatic Biomes",
    question: "Aquatic biomes are primarily characterized by which of the following factors?",
    options: [
      "a) Salinity, depth, and water flow",
      "b) Annual temperature and precipitation only",
      "c) Dominant plant growth forms only",
      "d) Latitude alone"
    ],
    correct_answer: "a) Salinity, depth, and water flow",
    explanation: "Aquatic biomes are characterized by factors such as salinity, depth, and water flow, and are broadly split into freshwater and marine categories."
  },

  {
    id: 47,
    chapter: 3,
    topic: "Aquatic Biomes",
    question: "Approximately what percentage of Earth's surface is covered by water?",
    options: [
      "a) 30%",
      "b) 50%",
      "c) 70%",
      "d) 90%"
    ],
    correct_answer: "c) 70%",
    explanation: "About 70% of Earth is covered by water, though not all of it is accessible freshwater."
  },

  {
    id: 48,
    chapter: 3,
    topic: "Aquatic Biomes",
    question: "As fast-moving streams combine and slow down, forming rivers, what typically happens to plant growth?",
    options: [
      "a) Plant growth decreases because rivers have less light",
      "b) Plant growth increases as more sediment and organic material settle",
      "c) Plant growth stays exactly the same",
      "d) Plants disappear entirely in rivers"
    ],
    correct_answer: "b) Plant growth increases as more sediment and organic material settle",
    explanation: "Streams tend to have few plants and algae, but as they combine into rivers, more sediment and organic material settle, allowing plant growth to occur."
  },

  {
    id: 49,
    chapter: 3,
    topic: "Aquatic Biomes",
    question: "In a lake, the shallow area near the shoreline that can support vegetation is called the:",
    options: [
      "a) Limnetic zone",
      "b) Littoral zone",
      "c) Profundal zone",
      "d) Benthic zone"
    ],
    correct_answer: "b) Littoral zone",
    explanation: "The littoral zone is the shallow area near a lake's shoreline where sunlight can reach the bottom, allowing vegetation to grow."
  },

  {
    id: 50,
    chapter: 3,
    topic: "Aquatic Biomes",
    question: "Floating algae known as phytoplankton primarily live in which zone of a lake?",
    options: [
      "a) The profundal zone",
      "b) The benthic zone",
      "c) The limnetic zone",
      "d) The littoral zone only"
    ],
    correct_answer: "c) The limnetic zone",
    explanation: "The limnetic zone is the area of open water where sunlight penetrates to its deepest extent, and it's where floating phytoplankton live."
  },

  {
    id: 51,
    chapter: 3,
    topic: "Aquatic Biomes",
    question: "The area of a lake where sunlight can no longer reach is called the:",
    options: [
      "a) Littoral zone",
      "b) Profundal zone",
      "c) Limnetic zone",
      "d) Intertidal zone"
    ],
    correct_answer: "b) Profundal zone",
    explanation: "The profundal zone is the deep area of a lake where sunlight cannot penetrate."
  },

  {
    id: 52,
    chapter: 3,
    topic: "Aquatic Biomes",
    question: "The very bottom of a lake, pond, or ocean is known as the:",
    options: [
      "a) Benthic zone",
      "b) Photic zone",
      "c) Littoral zone",
      "d) Aphotic zone"
    ],
    correct_answer: "a) Benthic zone",
    explanation: "The benthic zone refers to the bottom of a body of water, whether a lake, pond, or ocean."
  },

  {
    id: 53,
    chapter: 3,
    topic: "Aquatic Biomes",
    question: "A lake with very low nutrient levels is classified as:",
    options: [
      "a) Eutrophic",
      "b) Mesotrophic",
      "c) Oligotrophic",
      "d) Profundal"
    ],
    correct_answer: "c) Oligotrophic",
    explanation: "Lakes are classified by nutrient level: oligotrophic (low nutrients), mesotrophic (moderate), and eutrophic (high)."
  },

  {
    id: 54,
    chapter: 3,
    topic: "Aquatic Biomes",
    question: "A eutrophic lake with high nutrient levels often experiences:",
    options: [
      "a) Very low algae concentrations",
      "b) High algae concentrations and reduced light penetration due to turbidity",
      "c) Permanently frozen surfaces",
      "d) No measurable nutrients at all"
    ],
    correct_answer: "b) High algae concentrations and reduced light penetration due to turbidity",
    explanation: "Eutrophic lakes have high nutrient levels, which can lead to high concentrations of algae and increased turbidity that blocks light."
  },

  {
    id: 55,
    chapter: 3,
    topic: "Aquatic Biomes",
    question: "Freshwater wetlands are especially important habitats for which group of animals during migration and breeding?",
    options: [
      "a) Coral species",
      "b) Bird species",
      "c) Deep-sea fish",
      "d) Desert reptiles"
    ],
    correct_answer: "b) Bird species",
    explanation: "Freshwater wetlands, land saturated with water for at least part of the year, are important habitats that many bird species depend on during migration and breeding seasons."
  },

  {
    id: 56,
    chapter: 3,
    topic: "Aquatic Biomes",
    question: "Estuaries are highly productive and act as nurseries for fish primarily because they:",
    options: [
      "a) Are located far from any coastline",
      "b) Combine river freshwater and ocean saltwater, carrying nutrients and providing shelter",
      "c) Have no vegetation to hide predators",
      "d) Are always frozen year-round"
    ],
    correct_answer: "b) Combine river freshwater and ocean saltwater, carrying nutrients and providing shelter",
    explanation: "Estuaries form where river freshwater meets ocean saltwater, carrying nutrients from rivers and filtering contaminants, which makes them highly productive nurseries for fish."
  },

  {
    id: 57,
    chapter: 3,
    topic: "Aquatic Biomes",
    question: "Mangrove swamps are characterized by trees with roots that rise above the water. What is the purpose of this adaptation?",
    options: [
      "a) To survive high salt content near tropical/subtropical coasts",
      "b) To capture more sunlight for photosynthesis",
      "c) To avoid predation by fish",
      "d) To prevent flooding entirely"
    ],
    correct_answer: "a) To survive high salt content near tropical/subtropical coasts",
    explanation: "Mangrove swamps occur near tropical and subtropical coasts, and mangroves have roots that rise above the water to help them survive the high salt content of their environment."
  },

  {
    id: 58,
    chapter: 3,
    topic: "Aquatic Biomes",
    question: "Species living in the intertidal zone must adapt to which major challenges?",
    options: [
      "a) Extreme cold and permafrost",
      "b) Extreme temperature swings and desiccation (drying out)",
      "c) Complete lack of sunlight",
      "d) Chemosynthesis requirements"
    ],
    correct_answer: "b) Extreme temperature swings and desiccation (drying out)",
    explanation: "The intertidal zone lies between high and low tide, so species there must adapt to extreme temperature changes and the risk of drying out (desiccation) when exposed at low tide."
  },

  {
    id: 59,
    chapter: 3,
    topic: "Aquatic Biomes",
    question: "Coral reefs, Earth's most diverse marine biome, are especially vulnerable to:",
    options: [
      "a) Coral bleaching",
      "b) Permafrost thawing",
      "c) Desiccation at low tide",
      "d) Eutrophication only"
    ],
    correct_answer: "a) Coral bleaching",
    explanation: "Coral reefs rely on a symbiotic relationship with algae and are especially prone to coral bleaching, often triggered by environmental stress like warming waters."
  },

  {
    id: 60,
    chapter: 3,
    topic: "Aquatic Biomes",
    question: "In the open ocean, the upper layer that still receives sunlight is called the:",
    options: [
      "a) Aphotic zone",
      "b) Photic zone",
      "c) Benthic zone",
      "d) Profundal zone"
    ],
    correct_answer: "b) Photic zone",
    explanation: "The photic zone is the upper portion of the open ocean that still receives sunlight, while the deeper aphotic zone does not."
  },

  {
    id: 61,
    chapter: 3,
    topic: "Aquatic Biomes",
    question: "Some species in the deepest, sunless parts of the ocean survive through a process called:",
    options: [
      "a) Photosynthesis",
      "b) Chemosynthesis",
      "c) Resource partitioning",
      "d) Eutrophication"
    ],
    correct_answer: "b) Chemosynthesis",
    explanation: "In the aphotic zone, where no sunlight reaches, some species perform chemosynthesis -- producing energy from chemical reactions rather than sunlight."
  }

];

import { CaseFile } from './models/CaseFile.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  caseFiles = [
    new CaseFile({
      agency: '🦄GF',
      description: "A student near the codeworks campus reported the sighting of a floating blue Orangutan over the school. The Subject in questions was emanating psychic energy.  We will send they G-force to investigate.",
      reportedDate: '11/5/2024'
    }),
    new CaseFile({
      agency: '👽SPCY',
      description: "Upon recent sightings of individuals in the Ada County area. Reports of Large silver potatoe like objects were seen shooting through the sky.  One report indicates a landing of such craft at a local Mc Donald's. Records of sale from this establishment were pulled matching with posting times from social media videos, and it looks like a Saweetie meal was purchased with the Saweetie spicy limited time sauce.",
      reportedDate: '11/5/2024'
    }),
    new CaseFile({
      agency: '🌳KND',
      description: "Some kids were sucked into another dimension. Maybe some time in the next two years (hopefully before they grow up) we will see how this drawn out story ends. Rumors of the next 'season' are already online.",
      reportedDate: '11/5/2024'
    }),
  ]

  /** @type {CaseFile} */
  activeCaseFile = null



  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())
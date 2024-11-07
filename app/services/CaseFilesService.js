import { AppState } from "../AppState.js"
import { CaseFile } from "../models/CaseFile.js"
import { REDACT } from "../utils/REDACT.js";
import { loadState, saveState } from "../utils/Store.js";



class CaseFilesService {
  // NOTES newText is only the text from the active textarea.
  saveActiveCaseFile(newText) {
    const caseFile = AppState.activeCaseFile
    caseFile.description = REDACT(newText) // overwrite active description with new description
    caseFile.updatedAt = new Date() // change the updatedAt to now
    AppState.emit('activeCaseFile') // tricks the listener into triggering our draw
    this.saveCaseFiles()
  }
  // NOTE take in an id. Find the original caseFile that has that Id. Set that found caseFile to the active caseFile.
  selectActiveCaseFile(caseFileId) {
    console.log('service', caseFileId);
    const selectedCaseFile = AppState.caseFiles.find(caseFile => caseFileId == caseFile.id)
    console.log(selectedCaseFile);
    AppState.activeCaseFile = selectedCaseFile
  }
  createCaseFile(formData) {
    // console.log('service', formData);
    AppState.caseFiles.push(new CaseFile(formData))
    console.log(AppState.caseFiles);
    this.saveCaseFiles()
  }


  //NOTE saveState and loadState come from Store.js in the utils. The quicken localStorage management
  saveCaseFiles() {
    saveState('caseFiles', AppState.caseFiles)
  }
  loadCaseFiles() {
    // the [CaseFile] indicates the type of data, the information from localStorage should be "backed" by.
    // in this case "[]"array of "CaseFile"s
    AppState.caseFiles = loadState('caseFiles', [CaseFile])
  }

}

export const caseFilesService = new CaseFilesService()
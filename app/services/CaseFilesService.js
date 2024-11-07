import { AppState } from "../AppState.js"
import { CaseFile } from "../models/CaseFile.js"
import { REDACT } from "../utils/REDACT.js";
import { loadState, saveState } from "../utils/Store.js";



class CaseFilesService {
  saveActiveCaseFile(newText) {
    const caseFile = AppState.activeCaseFile
    caseFile.description = REDACT(newText)
    caseFile.updatedAt = new Date()
    AppState.emit('activeCaseFile') // tricks the listener into triggering
    this.saveCaseFiles()
  }
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


  saveCaseFiles() {
    saveState('caseFiles', AppState.caseFiles)
  }
  loadCaseFiles() {
    AppState.caseFiles = loadState('caseFiles', [CaseFile])
  }

}

export const caseFilesService = new CaseFilesService()
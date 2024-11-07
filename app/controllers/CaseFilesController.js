import { AppState } from "../AppState.js";
import { caseFilesService } from "../services/CaseFilesService.js";


export class CaseFilesController {
  constructor() {
    console.log('📂🎮');
    // this.drawCaseFilesList()
    // caseFilesService.loadCaseFiles() Be wary of loading data before your observers are set up. The load will not trigger them!
    AppState.on('caseFiles', () => console.log('Case Files changed'))
    AppState.on('caseFiles', this.drawCaseFilesList)
    AppState.on('activeCaseFile', this.drawActiveCaseFile)
    caseFilesService.loadCaseFiles()
  }

  drawCaseFilesList() {
    console.log('✏️📂📂');
    const caseFilesListElm = document.getElementById('case-files-list')
    caseFilesListElm.innerHTML = ''
    AppState.caseFiles.forEach(caseFile => caseFilesListElm.innerHTML += caseFile.ListTemplate)

    const caseCountElm = document.getElementById('case-file-count')
    caseCountElm.innerHTML = AppState.caseFiles.length.toString()
  }

  drawActiveCaseFile() {
    console.log('✏️👉📂');
    const activeCaseFileElm = document.getElementById('active-case-file')
    activeCaseFileElm.innerHTML = AppState.activeCaseFile.ActiveTemplate
  }

  createCaseFile() {
    console.log('Creating Case File');
    event.preventDefault()
    const formElm = event.target
    // console.log(formElm.agency.value);
    const formData = {
      // @ts-ignore
      agency: formElm.agency.value,
      // @ts-ignore
      reportedDate: formElm.reportedDate.value
    }
    console.log(formData);
    caseFilesService.createCaseFile(formData)
    // this.drawCaseFilesList() 
  }

  selectActiveCaseFile(caseFileId) {
    console.log('👉📂', caseFileId);
    caseFilesService.selectActiveCaseFile(caseFileId)
  }

  saveActiveCaseFile() {
    event.preventDefault()
    console.log('💾📂', AppState.activeCaseFile);
    const formElm = event.target
    // @ts-ignore
    let newText = formElm.description.value
    console.log(newText);
    caseFilesService.saveActiveCaseFile(newText)
  }
}
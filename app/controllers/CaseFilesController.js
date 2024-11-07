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
    event.preventDefault() // prevent form from 'refreshing' page
    const formElm = event.target
    // console.log(formElm.agency.value);
    const formData = {
      // @ts-ignore
      agency: formElm.agency.value, // pull values from inputs
      // @ts-ignore
      reportedDate: formElm.reportedDate.value // values are pulled by name attribute on the html
    }
    console.log(formData);
    caseFilesService.createCaseFile(formData)
    // this.drawCaseFilesList() 
  }

  selectActiveCaseFile(caseFileId) {
    console.log('👉📂', caseFileId);
    caseFilesService.selectActiveCaseFile(caseFileId)
  }

  // NOTE this doesn't need to take in an id, because you can only save one caseFile, the one already selected.
  saveActiveCaseFile() {
    event.preventDefault()
    console.log('💾📂', AppState.activeCaseFile);
    const formElm = event.target
    // @ts-ignore
    let newText = formElm.description.value // extract the text from the textarea
    console.log(newText);
    caseFilesService.saveActiveCaseFile(newText) // give that text to our service
  }
}
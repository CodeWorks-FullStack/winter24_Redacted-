import { generateId } from "../utils/GenerateId.js"



export class CaseFile {
  constructor(data) {
    this.id = data.id || generateId()
    this.caseNumber = this.id.slice(this.id.length - 5).toUpperCase()
    this.agency = data.agency
    this.description = data.description || ''
    this.reportedDate = data.reportedDate == undefined ? new Date() : new Date(data.reportedDate)
    // this.updatedAt = data.updatedAt || new Date() Or does not work for data that must be backed by a class
    // NOTE              if there is not one    ? caseFile from form : caseFile from localStorage
    this.updatedAt = data.updatedAt == undefined ? new Date() : new Date(data.updatedAt)
  }

  get ListTemplate() {
    return `
      <div role="button" onclick="app.CaseFilesController.selectActiveCaseFile('${this.id}')" class="selectable mb-3 d-flex justify-content-between">
        <span class="fw-bold">📂${this.caseNumber}</span><span>${this.agency}</span><span>${this.ShortReportedDate}</span>
      </div>
    `
  }

  get ActiveTemplate() {
    return `
<div class="col-10 bg-white rounded shadow-sm">
  <h2>${this.caseNumber}</h2>
  <p>${this.agency}</p>
  <p>${this.LongReportedDate}</p>
  <hr>
  <form onsubmit="app.CaseFilesController.saveActiveCaseFile()">
  <textarea name="description" class="form-control" rows="25">${this.description}</textarea>
  <button class="btn btn-success">Save</button>
  </form>
  <p>Last Updated: ${this.FormattedUpdatedAt}</p>
</div>
`
  }

  get LongUpdatedAt() {
    return this.updatedAt.toLocaleDateString('en-us', { weekday: 'long', year: 'numeric', day: 'numeric', dayPeriod: 'long', month: 'long', era: 'long' })
  }

  get FormattedUpdatedAt() {
    return this.updatedAt.toLocaleDateString('en-us', { hour: '2-digit', minute: '2-digit', year: '2-digit', day: '2-digit', month: '2-digit' })
  }

  get LongReportedDate() {
    return this.reportedDate.toLocaleDateString('en-us', { hour: '2-digit', minute: '2-digit', weekday: 'long', year: 'numeric', day: 'numeric', dayPeriod: 'long', month: 'long', era: 'long' })
  }

  get ShortReportedDate() {
    return this.reportedDate.toLocaleDateString('en-us', { year: '2-digit', day: '2-digit', month: '2-digit' })
  }
}
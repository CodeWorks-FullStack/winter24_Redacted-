import { CaseFilesController } from './controllers/CaseFilesController.js';
// NOTE we don't need this yet, you can just get rid of it
// import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  CaseFilesController = new CaseFilesController()

  // NOTE we don't need this yet, you can just get rid of it
  // constructor() {
  //   if (USE_ROUTER) {
  //     this.router = router
  //     this.router.init(this)
  //   }
  // }

}

const app = new App()
// @ts-ignore
window.app = app

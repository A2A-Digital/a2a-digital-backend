import ServiceContentController from '../src/controllers/ServiceContentController';
import SolutionContentController from '../src/controllers/SolutionContentController';
import EmailController from '../src/controllers/EmailController';

export default (app) => {

  // Services ROUTES
  app.get(`/api/service`, ServiceContentController.getAll);
  app.get(`/api/service/:title`, ServiceContentController.find);
  // app.post(`/api/service`, ServiceContentController.insert);
  // Solution ROUTES
  app.get(`/api/solution`, SolutionContentController.getAll);
  app.get(`/api/solution/:title`, SolutionContentController.find);
  // app.post(`/api/solution`, SolutionContentController.insert);
  //Email Routes
  app.post(`/api/send-email`, EmailController.sendMail);
  app.post(`/api/send-email-japan`, EmailController.sendMailJapan);
}
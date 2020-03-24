import Controller from  './Controller';
import Solution from  "../models/Solution";
import SolutionContentService from  "../services/SolutionContentServices";

const solutionContentService = new SolutionContentService(
    new Solution().getInstance()
  );


class SolutionContentController extends Controller {

  constructor(service) {
    super(service);
  }

}

export default new SolutionContentController(solutionContentService);
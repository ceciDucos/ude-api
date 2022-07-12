class ProblemDTO {
  idProblem;
  description;
  solution;
  active;
  problemCategory;

  constructor(description, solution, problemCategory) {
    this.description = description;
    this.solution = solution;
    this.problemCategory = problemCategory;
  }

  get getIdProblem() {
    return idProblem;
  }

  set setIdProblem(idProblem) {
    this.idProblem = idProblem;
  }

  get getDescription() {
    return description;
  }

  set setDescription(description) {
    this.description = description;
  }

  get getSolution() {
    return solution;
  }

  set setSolution(solution) {
    this.solution = solution;
  }

  isActive() {
    return active;
  }

  set setActive(active) {
    this.active = active;
  }

  get getProblemCategory() {
    return problemCategory;
  }

  set setProblemCategory(problemCategory) {
    this.problemCategory = problemCategory;
  }
}

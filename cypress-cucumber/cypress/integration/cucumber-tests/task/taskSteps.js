import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open the task manager app", () => {
  cy.visit("/");
});

When(
  "I add a task with title {string} and description {string}",
  (title, description) => {
    cy.get('input[placeholder="Task Title"]').type(title);
    cy.get('input[placeholder="Task Description"]').type(description);
    cy.contains("Add Task").click();
  }
);

Then(
  "I should see the task with title {string} and description {string}",
  (title, description) => {
    cy.contains("h3", title).should("exist");
    cy.contains("p", description).should("exist");
  }
);

Given(
  "I have a task with title {string} and description {string}",
  (title, description) => {
    cy.get('input[placeholder="Task Title"]').type(title);
    cy.get('input[placeholder="Task Description"]').type(description);
    cy.contains("Add Task").click();
  }
);

When("I mark the task as completed", () => {
  cy.contains("button", "Mark as Completed").click();
});

Then("the task should be marked as completed", () => {
  cy.get("li.completed").should("exist");
});

When("I delete the task", () => {
  cy.contains("button", "Delete").click();
});

Then(
  "I should not see the task with title {string} and description {string}",
  (title, description) => {
    cy.contains("h3", title).should("not.exist");
    cy.contains("p", description).should("not.exist");
  }
);

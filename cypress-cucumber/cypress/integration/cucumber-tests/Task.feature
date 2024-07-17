Feature: Task Management

  Scenario: Add a new task
    Given I open the task manager app
    When I add a task with title "New Task" and description "Task Description"
    Then I should see the task with title "New Task" and description "Task Description"

  Scenario: Complete a task
    Given I open the task manager app
    Given I have a task with title "New Task" and description "Task Description"
    When I mark the task as completed
    Then the task should be marked as completed

  Scenario: Delete a task
    Given I open the task manager app
    Given I have a task with title "New Task" and description "Task Description"
    When I delete the task
    Then I should not see the task with title "New Task" and description "Task Description"

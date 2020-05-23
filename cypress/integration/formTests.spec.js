describe("Form inputs", () => {
  it("can navigate to the site", () => {
    cy.visit("http://localhost:3000/pizza");
    cy.url().should("include", "localhost");
  });

  it("can type a name", () => {
    cy.get('input[name="name"]').type("Jason").should("have.value", "Jason");
  });

  it("can check a box", () => {
    cy.get('[type="checkbox"]').check();
  });
});

describe("Form validation", () => {
  it("validates form info correctly", () => {
    /////NAME/////
    cy.visit("http://localhost:3000/pizza");
    cy.contains("this must be at least 2 characters").should("not.exist");

    cy.get('input[name="name"]').type("a");
    cy.contains("this must be at least 2 characters").should("exist");

    cy.get('input[name="name"]').type("b");
    cy.contains("this must be at least 2 characters").should("not.exist");

    /////SIZE/////

    cy.get('[name="size"]').select("Small");

    /////SAUCE/////

    cy.get('[id="red"]').check();

    /////TOPPINGS/////

    cy.get('[type="checkbox"]').check();

    cy.get("button.order").click();
  });
});

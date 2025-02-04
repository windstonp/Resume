
module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.tsx",
        templateFile: "templates/component/index.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/test-{{pascalCase name}}.spec.tsx",
        templateFile: "templates/component/test.tsx.hbs",
      },
    ],
  });

  plop.setGenerator("context", {
    description: "Create a react context file",
    prompts: [
      {
        type: "input",
        name: "contextName",
        message: "What is your context name (ex: NameContext)?",
      },
    ],
    actions(data) {
      const actions = [];

      const name = data.contextName.replace("Context", "");

      actions.push({
        type: "add",
        path: `../src/contexts/{{pascalCase contextName}}.tsx`,
        templateFile: "templates/context/[context].tsx.hbs",
        data: { name },
      });

      return actions;
    },
  });

  plop.setGenerator("page", {
    description: "Create a next page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your page name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/app/{{lowerCase name}}/index.tsx",
        templateFile: "templates/page/index.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/app/{{pascalCase name}}/layout.tsx",
        templateFile: "templates/page/layout.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/app/{{pascalCase name}}/test-{{pascalCase name}}.spec.tsx",
        templateFile: "templates/page/test.tsx.hbs",
      },
    ],
  });

  plop.setGenerator("screen", {
    description: "Create a screen",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your screen name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/screens/{{pascalCase name}}/index.tsx",
        templateFile: "templates/screen/index.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/screens/{{pascalCase name}}/test-{{pascalCase name}}.spec.tsx",
        templateFile: "templates/screen/test.tsx.hbs",
      },
    ],
  });
};

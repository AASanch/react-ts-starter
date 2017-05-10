import { configure } from "@kadira/storybook";

function loadStories() {
  require("../src/stories/AppStories");
}

configure(loadStories, module) ;

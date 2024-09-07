import { loadPage } from '../util/loadPage.js';
import { createErrorView } from '../views/errorView.js';
import { createReposPage } from './reposPage.js';

export function createErrorPage(state) {
  const onRetry = () => {
    loadPage(createReposPage, state);
  };

  return createErrorView({ error: state.error, onRetry });
}

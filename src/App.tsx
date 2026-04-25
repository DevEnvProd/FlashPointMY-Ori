/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { StoryDetail } from './pages/StoryDetail';
import { FeedPage } from './pages/FeedPage';
import { SubmitTip } from './pages/SubmitTip';
import { About } from './pages/About';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="story/:id" element={<StoryDetail />} />
          <Route path="trending" element={<FeedPage type="trending" />} />
          <Route path="city/:id" element={<FeedPage type="city" />} />
          <Route path="submit" element={<SubmitTip />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<div className="p-10 text-center font-display text-4xl">404 - Page Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

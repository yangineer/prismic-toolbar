import { views } from '..';
import { DocumentPanel, PreviewPanel, SharePanel } from '.';

const { DOCS, DRAFTS, SHARE } = views;

export const Panel = ({ closePanel, documents, preview, page, onDocumentClick }) => (
  <div>
    <DocumentPanel documents={documents} onClose={closePanel} onDocumentClick={onDocumentClick} in={page === DOCS} />
    <PreviewPanel preview={preview} onClose={closePanel} in={page === DRAFTS} />
    <SharePanel preview={preview} onClose={closePanel} in={page === SHARE} />
  </div>
)
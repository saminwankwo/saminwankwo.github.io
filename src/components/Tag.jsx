export default function Tag({ children, primary }) {
  return (
    <span className={`tag ${primary ? 'tag-primary' : 'tag-normal'}`}>
      {children}
      <style>{`
        .tag {
          font-size: 11px;
          padding: 3px 10px;
          border-radius: 2px;
          font-family: var(--mono);
          display: inline-block;
          transition: 0.2s;
        }
        .tag-primary {
          border: 1px solid rgba(0, 255, 157, 0.6);
          color: var(--green);
          background: rgba(0, 255, 157, 0.06);
        }
        .tag-normal {
          border: 1px solid var(--border2);
          color: var(--text2);
        }
        .tag-normal:hover {
          border-color: var(--green);
          color: var(--green);
        }
      `}</style>
    </span>
  )
}

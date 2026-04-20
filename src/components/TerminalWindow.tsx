export default function TerminalWindow() {
  return (
    <div className="terminal-window">
      <div className="terminal-titlebar">
        <span className="term-dot term-dot-red" />
        <span className="term-dot term-dot-yellow" />
        <span className="term-dot term-dot-green" />
        <span className="terminal-label">samuel@dev ~ portfolio</span>
      </div>
      <div className="terminal-body font-mono">
        <p>
          <span className="term-prompt">›</span>{' '}
          <span style={{ color: '#fff' }}>node --info samuel.json</span>
        </p>
        <br />
        <p>
          <span className="term-key">{'  '}name</span>
          <span className="term-faint">: </span>
          <span className="term-str">&quot;Nwankwo Chibuike Samuel&quot;</span>
        </p>
        <p>
          <span className="term-key">{'  '}role</span>
          <span className="term-faint">: </span>
          <span className="term-str">&quot;Backend Engineer&quot;</span>
        </p>
        <p>
          <span className="term-key">{'  '}location</span>
          <span className="term-faint">: </span>
          <span className="term-str">&quot;Port Harcourt, NG&quot;</span>
        </p>
        <p>
          <span className="term-key">{'  '}stack</span>
          <span className="term-faint">: [</span>
          <span className="term-str">&quot;NestJS&quot;</span>
          <span className="term-faint">, </span>
          <span className="term-str">&quot;Laravel&quot;</span>
          <span className="term-faint">, </span>
          <span className="term-str">&quot;AWS&quot;</span>
          <span className="term-faint">]</span>
        </p>
        <p>
          <span className="term-key">{'  '}available</span>
          <span className="term-faint">: </span>
          <span className="term-bool">true</span>
        </p>
        <br />
        <p>
          <span className="term-prompt">›</span>{' '}
          <span style={{ color: '#fff' }}>git log --oneline --count</span>
        </p>
        <br />
        <p>
          <span className="term-check">✓</span>{' '}
          <span className="term-faint">200+ npm installs (auth-sdk)</span>
        </p>
        <p>
          <span className="term-check">✓</span>{' '}
          <span className="term-faint">99.7% uptime sports-prediction-api</span>
        </p>
        <p>
          <span className="term-check">✓</span>{' '}
          <span className="term-faint">50+ tenants on SaaS platform</span>
        </p>
        <br />
        <p>
          <span className="term-prompt">›</span>{' '}
          <span className="terminal-cursor" />
        </p>
      </div>
    </div>
  )
}

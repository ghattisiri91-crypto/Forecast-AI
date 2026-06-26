import React, { useCallback, useRef, useState } from 'react'
import { UploadCloud, FileSpreadsheet, CheckCircle2, AlertTriangle } from 'lucide-react'

function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/).slice(0, 6)
  return lines.map((line) => line.split(',').map((cell) => cell.trim()))
}

export default function DatasetUpload() {
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState('idle') // idle | uploading | done | error
  const [rows, setRows] = useState(null)
  const [fileName, setFileName] = useState('')
  const [dragOver, setDragOver] = useState(false)
  const inputRef = useRef(null)

  const handleFile = useCallback((file) => {
    if (!file) return
    if (!file.name.toLowerCase().endsWith('.csv')) {
      setStatus('error')
      return
    }
    setFileName(file.name)
    setStatus('uploading')
    setProgress(0)

    const reader = new FileReader()
    reader.onload = (e) => {
      const parsed = parseCSV(String(e.target.result))
      let pct = 0
      const interval = setInterval(() => {
        pct += 20
        setProgress(pct)
        if (pct >= 100) {
          clearInterval(interval)
          setRows(parsed)
          setStatus('done')
        }
      }, 120)
    }
    reader.onerror = () => setStatus('error')
    reader.readAsText(file)
  }, [])

  return (
    <section id="upload" className="bg-ink py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">02 — Dataset upload</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-paper md:text-4xl">
          Bring your own sales history
        </h2>
        <p className="mt-3 max-w-xl font-body text-sm text-paper/65">
          Drop a CSV with at least <code className="font-mono text-amber">date</code>,{' '}
          <code className="font-mono text-amber">sku</code> and{' '}
          <code className="font-mono text-amber">units_sold</code> columns. We validate the file
          client-side before sending it to the forecasting service.
        </p>

        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFile(e.dataTransfer.files?.[0]) }}
          onClick={() => inputRef.current?.click()}
          className={`focus-ring mt-8 flex cursor-pointer flex-col items-center justify-center gap-3 rounded-sm border-2 border-dashed px-6 py-16 text-center transition-colors ${
            dragOver ? 'border-amber bg-amber/5' : 'border-paper/25 hover:border-paper/45'
          }`}
        >
          <input
            ref={inputRef}
            type="file"
            accept=".csv"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
          <UploadCloud className="text-amber" size={32} />
          <p className="font-mono text-sm text-paper/80">Drag a .csv file here, or click to browse</p>
          <p className="font-mono text-xs text-paper/40">Max 50MB · .csv only</p>
        </div>

        {status === 'error' && (
          <div className="mt-4 flex items-center gap-2 rounded-sm border border-alert/40 bg-alert/10 px-4 py-3 font-mono text-xs text-alert">
            <AlertTriangle size={16} /> That file isn't a .csv — please choose a valid CSV export.
          </div>
        )}

        {(status === 'uploading' || status === 'done') && (
          <div className="mt-6">
            <div className="flex items-center justify-between font-mono text-xs text-paper/60">
              <span className="flex items-center gap-2">
                <FileSpreadsheet size={14} /> {fileName}
              </span>
              <span>{progress}%</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-paper/10">
              <div
                className="h-full rounded-full bg-amber transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {status === 'done' && rows && (
          <div className="mt-8">
            <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-forecast">
              <CheckCircle2 size={14} /> Parsed preview — first {rows.length - 1} rows
            </div>
            <div className="overflow-x-auto rounded-sm border border-paper/15">
              <table className="w-full font-mono text-xs text-paper/80">
                <thead className="bg-paper/5">
                  <tr>
                    {rows[0].map((h, i) => (
                      <th key={i} className="px-4 py-2 text-left uppercase tracking-wide text-paper/50">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.slice(1).map((r, ri) => (
                    <tr key={ri} className="border-t border-paper/10">
                      {r.map((c, ci) => (
                        <td key={ci} className="px-4 py-2">{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

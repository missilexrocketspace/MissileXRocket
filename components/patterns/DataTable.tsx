export default function DataTable({ rows, caption }: { rows: [string, string][]; caption?: string }) {
  return (
    <div className="overflow-x-auto border border-line">
      <table className="w-full min-w-[420px] border-collapse text-left text-sm">
        {caption && (
          <caption className="border-b border-line bg-mist px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-[0.24em] text-isroBlue caption-top">
            {caption}
          </caption>
        )}
        <tbody>
          {rows.map(([label, value], index) => (
            <tr key={label} className={index % 2 === 0 ? 'bg-white' : 'bg-mist/60'}>
              <th scope="row" className="w-1/3 border-b border-line px-4 py-3 align-top text-sm font-semibold text-charcoal">
                {label}
              </th>
              <td className="border-b border-line px-4 py-3 align-top text-sm text-steel">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

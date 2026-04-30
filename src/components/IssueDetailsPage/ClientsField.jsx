export const ClientsField = ({ clients = [] }) => {
  const values = Array.isArray(clients) ? clients : [clients];

  return (
    <div>
      <p className="text-xs font-semibold uppercase text-gray-500 mb-2">
        Clients
      </p>

      <div className="flex flex-wrap gap-2">
        {values.length===0 && (
            <span className="text-gray-700">None</span>
        )}
        {values.map((client, index) => (
          <span
            key={index}
            className="px-2 py-0.5 text-xs text-gray-800
                       border border-gray-500 rounded-md
                       bg-white font-medium"
          >
            {client}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ClientsField;
import React from "react";

export function SchemaInjector({ schema }: { schema: object }) {
  const json = JSON.stringify(schema);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

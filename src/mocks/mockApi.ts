export const lockResource = async (resourceId: string): Promise<boolean> => {
  console.log(`Resource locked: ${resourceId}`);
  return true;
};

export const releaseResource = async (resourceId: string): Promise<boolean> => {
  console.log(`Resource released: ${resourceId}`);
  return true;
};

export const sendHeartbeat = async (resourceId: string): Promise<boolean> => {
  console.log(`Heartbeat sent for resource: ${resourceId}`);
  return true;
};

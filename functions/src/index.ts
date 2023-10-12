import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

const db = admin.firestore();

const sendResponse = (
  response: functions.Response,
  statusCode: number,
  body: string
): void => {
  response.send({
    statusCode,
    body,
  });
};

export const addDataset = functions.https.onRequest(
  async (req: functions.Request, res: functions.Response) => {
    if (req.method !== "POST") {
      sendResponse(
        res,
        405,
        JSON.stringify({error: "Invalid Request"})
      );
    } else {
      const dataset = req.body;
      for (const key of Object.keys(dataset)) {
        const data = dataset[key];
        try {
          await db.collection("questions").doc(key).set(data);
        } catch (error) {
          console.error(`Error adding data to Firestore: ${error}`);
          sendResponse(
            res,
            500,
            JSON.stringify({message: "Internal Server Error"})
          );
          return;
        }
      }
      sendResponse(
        res,
        200,
        JSON.stringify({message: "Successfully added dataset! WooHoo!"})
      );
    }
  }
);

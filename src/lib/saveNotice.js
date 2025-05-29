import { db } from "@/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  Timestamp,
} from "firebase/firestore";

export const saveNoticeToFirestore = async (notice) => {
  try {
    console.log("📥 Notice received:", notice);
    if (notice?.id) {
      const ref = doc(db, "notices", notice.id);
      await updateDoc(ref, {
        title: notice.title,
        message: notice.message,
        important: notice.important,
        updatedAt: Timestamp.now(),
      });
      console.log("📝 Notice updated successfully");
    } else {
      await addDoc(collection(db, "notices"), {
        title: notice.title,
        message: notice.message,
        important: notice.important,
        createdAt: Timestamp.now(),
      });
      console.log("✅ Notice added successfully");
    }
  } catch (error) {
    console.error("❌ Error saving notice:", error);
    throw error; // rethrow so AdminPage can catch
  }
};

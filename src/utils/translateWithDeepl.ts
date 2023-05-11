export const translateWithDeepl = async (text: string, targetLang: string) => {
  const authKey = process.env.NEXT_PUBLIC_DEEPL_API_KEY;
  // @ts-ignore
  const params = new URLSearchParams({
    auth_key: authKey,
    target_lang: targetLang,
    text,
  });

  return fetch("https://api-free.deepl.com/v2/translate", {
    method: "POST",
    body: params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((r) => r.json())
    .then(
      (response: {
        translations: { detected_source_language: string; text: string }[];
      }) =>
        response.translations.map((translation) => translation.text).join(" ")
    )
    .catch((error) => {
      console.error(error);
      return "Could not translate";
    });
};

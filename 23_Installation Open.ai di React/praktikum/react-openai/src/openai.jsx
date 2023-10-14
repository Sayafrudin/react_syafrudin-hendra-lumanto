import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import OpenAI from "openai";
import "./styles.css";

export default function FormAI() {
  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const AICLick = async () => {
    setLoading(true);
    try {
      const resp = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: prompt,
        temperature: 0.3,
        max_tokens: 256,
      });
      setResult(resp.choices[0].text);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <Container fluid="md" className="p-5">
        <Row className="form">
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Ask Anything to OpenAI</Form.Label>
            <Form.Control
              as="textarea"
              name="text_ai"
              rows={5}
              placeholder="What is 2 + 2"
              onChange={(e) => setPrompt(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Result :</Form.Label>
            <Form.Control as="textarea" rows={5} value={result} />
          </Form.Group>

          <Button variant="secondary" onClick={AICLick}>
            Submit
          </Button>

          <p>{loading ? "AI is Loading...." : ""}</p>
        </Row>
      </Container>
    </div>
  );
}

/**
 * 型情報の無いJSON(サーバーから受信したレスポンス等を想定)に対し
 * 特定のインタフェースに適合することを検証し型変換を行うためのコンバータ
 */
export interface JsonTypeConverter<T> {
  canBe: (json: unknown) => boolean;
}
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  AccountMeta,
  Context,
  PublicKey,
  Serializer,
  Signer,
  WrappedInstruction,
  checkForIsWritableOverride as isWritable,
  mapSerializer,
} from '@lorisleiva/js-core';

// Accounts.
export type AmountToUiAmountInstructionAccounts = {
  mint: PublicKey;
};

// Arguments.
export type AmountToUiAmountInstructionData = {
  discriminator: number;
  amount: bigint;
};

export type AmountToUiAmountInstructionArgs = { amount: number | bigint };

export function getAmountToUiAmountInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  AmountToUiAmountInstructionArgs,
  AmountToUiAmountInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    AmountToUiAmountInstructionArgs,
    AmountToUiAmountInstructionData,
    AmountToUiAmountInstructionData
  >(
    s.struct<AmountToUiAmountInstructionData>(
      [
        ['discriminator', s.u8],
        ['amount', s.u64],
      ],
      'AmountToUiAmountInstructionArgs'
    ),
    (value) =>
      ({ ...value, discriminator: 23 } as AmountToUiAmountInstructionData)
  ) as Serializer<
    AmountToUiAmountInstructionArgs,
    AmountToUiAmountInstructionData
  >;
}

// Instruction.
export function amountToUiAmount(
  context: Pick<Context, 'serializer' | 'programs'>,
  input: AmountToUiAmountInstructionAccounts & AmountToUiAmountInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = context.programs.get('splToken').publicKey;

  // Resolved accounts.
  const mintAccount = input.mint;

  // Mint.
  keys.push({
    pubkey: mintAccount,
    isSigner: false,
    isWritable: isWritable(mintAccount, false),
  });

  // Data.
  const data =
    getAmountToUiAmountInstructionDataSerializer(context).serialize(input);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}

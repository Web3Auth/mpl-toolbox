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
  getProgramAddressWithFallback,
  mapSerializer,
} from '@lorisleiva/js-core';

// Accounts.
export type ThawTokenInstructionAccounts = {
  account: PublicKey;
  mint: PublicKey;
  owner: Signer;
};

// Arguments.
export type ThawTokenInstructionData = { discriminator: number };

export type ThawTokenInstructionArgs = {};

export function getThawTokenInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<ThawTokenInstructionArgs, ThawTokenInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    ThawTokenInstructionArgs,
    ThawTokenInstructionData,
    ThawTokenInstructionData
  >(
    s.struct<ThawTokenInstructionData>(
      [['discriminator', s.u8]],
      'ThawAccountInstructionArgs'
    ),
    (value) => ({ discriminator: 11, ...value } as ThawTokenInstructionData)
  ) as Serializer<ThawTokenInstructionArgs, ThawTokenInstructionData>;
}

// Instruction.
export function thawToken(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: ThawTokenInstructionAccounts
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'splToken',
    'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
  );

  // Account.
  keys.push({ pubkey: input.account, isSigner: false, isWritable: true });

  // Mint.
  keys.push({ pubkey: input.mint, isSigner: false, isWritable: false });

  // Owner.
  signers.push(input.owner);
  keys.push({
    pubkey: input.owner.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Data.
  const data = getThawTokenInstructionDataSerializer(context).serialize({});

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}

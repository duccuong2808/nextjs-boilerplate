// Define Vietnamese vowels and tone marks
const VIETNAMESE_VOWELS = new Set(['a', 'e', 'i', 'o', 'u', 'y', 'â', 'ê', 'ô', 'ơ', 'ư', 'ă']);
const TONE_MARKS = new Set(['s', 'f', 'r', 'x', 'j']);

// Tone mark mappings for each vowel
const TONE_MAP: Record<string, Record<string, string>> = {
  'a': {'s': 'á', 'f': 'à', 'r': 'ả', 'x': 'ã', 'j': 'ạ'},
  'e': {'s': 'é', 'f': 'è', 'r': 'ẻ', 'x': 'ẽ', 'j': 'ẹ'},
  'i': {'s': 'í', 'f': 'ì', 'r': 'ỉ', 'x': 'ĩ', 'j': 'ị'},
  'o': {'s': 'ó', 'f': 'ò', 'r': 'ỏ', 'x': 'õ', 'j': 'ọ'},
  'u': {'s': 'ú', 'f': 'ù', 'r': 'ủ', 'x': 'ũ', 'j': 'ụ'},
  'y': {'s': 'ý', 'f': 'ỳ', 'r': 'ỷ', 'x': 'ỹ', 'j': 'ỵ'},
  'â': {'s': 'ấ', 'f': 'ầ', 'r': 'ẩ', 'x': 'ẫ', 'j': 'ậ'},
  'ê': {'s': 'ế', 'f': 'ề', 'r': 'ể', 'x': 'ễ', 'j': 'ệ'},
  'ô': {'s': 'ố', 'f': 'ồ', 'r': 'ổ', 'x': 'ỗ', 'j': 'ộ'},
  'ơ': {'s': 'ớ', 'f': 'ờ', 'r': 'ở', 'x': 'ỡ', 'j': 'ợ'},
  'ư': {'s': 'ứ', 'f': 'ừ', 'r': 'ử', 'x': 'ữ', 'j': 'ự'},
  'ă': {'s': 'ắ', 'f': 'ằ', 'r': 'ẳ', 'x': 'ẵ', 'j': 'ặ'}
};

// Special vowel combinations that convert to Vietnamese letters
const VOWEL_COMBINATIONS: Record<string, string> = {
  'aa': 'â', 'aw': 'ă', 'ee': 'ê', 'oo': 'ô', 
  'ow': 'ơ', 'w': 'ư', 'dd': 'đ',
  'iee': 'iê', 'ye': 'yê', 'uo': 'ươ'
};

export const applyTelex = (input: string): string => {
  let result = '';
  let i = 0;
  
  while (i < input.length) {
    // Check for special vowel combinations first
    if (i + 3 <= input.length && input.substring(i, i + 3) in VOWEL_COMBINATIONS) {
      result += VOWEL_COMBINATIONS[input.substring(i, i + 3)];
      i += 3;
      continue;
    }
    
    if (i + 2 <= input.length && input.substring(i, i + 2) in VOWEL_COMBINATIONS) {
      result += VOWEL_COMBINATIONS[input.substring(i, i + 2)];
      i += 2;
      continue;
    }

    // Handle tone marks
    if (TONE_MARKS.has(input[i]) && i > 0) {
      const lastVowelIndex = findLastVowelIndex(result);
      if (lastVowelIndex >= 0) {
        const vowel = result[lastVowelIndex];
        const tone = input[i];
        
        if (TONE_MAP[vowel]?.[tone]) {
          result = result.slice(0, lastVowelIndex) + 
                   TONE_MAP[vowel][tone] + 
                   result.slice(lastVowelIndex + 1);
          i++;
          continue;
        }
      }
    }
    
    // Default case - add character as-is
    result += input[i];
    i++;
  }
  
  return result;
};

const findLastVowelIndex = (str: string): number => {
  for (let i = str.length - 1; i >= 0; i--) {
    if (VIETNAMESE_VOWELS.has(str[i])) {
      return i;
    }
  }
  return -1;
};